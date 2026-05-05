---
id: publishing
title: Publishing to the Addon Registry
---

The [phpVMS addon registry](https://github.com/phpvms/addon-registry) is the
central index of community addons. Once your addon is registered, operators
can discover and install it directly from their phpVMS admin UI — they never
need to clone repos or run composer commands.

This guide is the short reference. The
[full plugin authors guide](https://github.com/phpvms/addon-registry/blob/main/docs/plugin-authors.md)
in the registry repo is the authoritative source.

---

## Prerequisites

Before submitting:

- A **public GitHub repository** for your addon.
- At least one **published GitHub release** with a zip asset attached.
- The zip contains **`module.json` at its root** (not inside a subdirectory).
- The zip's `module.json` declares a **`registry_id`** equal to your
  registry name (for example, `acme/reports`). See
  [Adding `registry_id` to module.json](#adding-registry_id-to-modulejson)
  below.
- All migrations under `database/migrations/` follow the
  [migration rules](./database.md#migration-rules).

### Adding `registry_id` to module.json

The `alias` field in `module.json` is restricted to lowercase identifiers
(letters, digits, underscores) because Laravel uses it as the namespace
for views, configs, and translations — for example `view('reports::index')`.
Registry names use the `{author}/{package}` form, which is not a legal
alias.

Add a separate `registry_id` field to `module.json` so the registry can
match your addon to its YAML entry:

```json
{
  "name": "Reports",
  "alias": "reports",
  "registry_id": "acme/reports",
  "description": "KPIs, route performance, scheduled exports.",
  "keywords": ["reports", "analytics"],
  "priority": 0,
  "providers": [
    "Modules\\Reports\\Providers\\ReportsServiceProvider"
  ],
  "files": []
}
```

- `name` — display name. Free-form.
- `alias` — Laravel namespace. Lowercase, no slashes.
- `registry_id` — must equal the `name:` value in your `packages/{author}/{name}.yml`.

---

## What you submit

A **single YAML file** at `packages/{author}/{name}.yml` describing your
addon. You do **not** submit a `release:` block — the registry's bot
queries your GitHub releases and adds it after merge.

If your namespace doesn't exist yet, also submit
`packages/{author}/meta.yml` in the same PR.

### Naming rules

Registry names use the form `{author}/{package}`:

- Lowercase letters, digits, and hyphens only.
- Each segment is at least two characters.
- No underscores, no uppercase, no periods.
- The slug `meta` is reserved (it denotes namespace metadata).

**Conventions** (recommended, not enforced):

- The `{author}` segment should match your **GitHub username or
  organisation**. This keeps ownership unambiguous and makes the source
  repo easy to find.
- The `{package}` segment should match the **GitHub repository name** of
  the addon source. So an addon hosted at
  `https://github.com/acme/reports-addon` is best registered as
  `acme/reports-addon`.

Examples that follow the convention: `acme/reports`,
`phpvms/core-tools`, `crew-tools/dispatch`.

### Minimal package YAML

```yaml
# packages/acme/reports.yml
name: acme/reports
description: Reports addon for phpVMS — KPIs, route performance, scheduled exports.
category: reporting
license: MIT
keywords:
  - reports
  - analytics
  - dashboard
source:
  type: github-release
  repository: acme/reports-addon
requirements:
  php: '>=8.3'
  phpvms: '>=7.0.0'
```

That's the entire submission. The bot resolves the `release:` block after
merge.

### Allowed `category` values

Pick exactly one. The current list lives in
[`schema/categories.yml`](https://github.com/phpvms/addon-registry/blob/main/schema/categories.yml):

- `accounting`
- `communications`
- `crew`
- `dev-tools`
- `integration`
- `operations`
- `pireps`
- `reporting`
- `scheduling`
- `templates`
- `ui`
- `widget`
- `other`

To request a new category, open a separate PR adding it to that file
**before** submitting your package YAML.

### `meta.yml` (first-time author)

If your namespace is new (no other addons under `packages/{author}/`),
include `packages/{author}/meta.yml` in the same PR:

```yaml
# packages/acme/meta.yml
name: Acme Corp
url: https://acme.example.com
maintainers:
  - acme-dev
  - jdoe
```

`maintainers` is a list of GitHub usernames. The first listed is treated
as the primary contact.

---

## What CI checks at PR time

1. **Schema** — required fields, valid `name` regex, allowed category,
   requirements present.
2. **Filename matches name** — `acme/reports` lives at
   `packages/acme/reports.yml`, no exceptions.
3. **Source repo exists and is public.**
4. **Latest release** — at least one published release with a zip asset.
5. **Zip integrity** — downloadable, contains `module.json` at the root,
   no forbidden paths (`.git/`, `.github/`, `tests/`, `node_modules/`,
   `.idea/`, `.vscode/`, `.DS_Store`, `Tests/`).
6. **module.json** — schema-valid; `registry_id` equals the registry name.
7. **Migration lint** — see [Migration rules](./database.md#migration-rules).

The validator posts a single comment summarising results. If everything
passes, the comment includes the proposed `release:` block.

---

## What happens after merge

1. The `release-block` workflow opens an auto-merging bot PR appending
   the resolved `release:` block to your YAML.
2. The `publish` workflow builds `raw/packages.json` and
   `raw/keywords.json`, uploads them to R2, and refreshes the worker's
   edge cache.
3. Hosts polling the read API see your addon within a few minutes.
4. Subsequent releases on your repo are picked up by the discovery
   sweep (cron every 6h, plus push triggers from the worker).

---

## Updating your addon

Tag a new release on your GitHub repo. The discovery sweep opens an
auto-merging `bot/bump-{author}-{name}-{version}` PR within hours.

**You do not interact with the registry repository for routine updates.**

---

## Marking an addon revoked or archived

Revocation and archival are maintainer actions, not author actions. See
[`revocation.md`](https://github.com/phpvms/addon-registry/blob/main/docs/revocation.md)
in the registry repo for the process.
