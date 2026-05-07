/**
 * Swizzled DocItem/Paginator — renders the standard prev/next paginator,
 * then a global "Need help?" block on every doc page.
 *
 * This wraps the default behavior; we don't reimplement DocPaginator.
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocPaginator from '@theme/DocPaginator';
import HelpBlock from '@site/src/components/HelpBlock';

export default function DocItemPaginator(): JSX.Element {
  const {metadata} = useDoc();
  return (
    <>
      <DocPaginator
        className="docusaurus-mt-lg"
        previous={metadata.previous}
        next={metadata.next}
      />
      <div className="lp-doc-help-wrapper">
        <HelpBlock />
      </div>
    </>
  );
}
