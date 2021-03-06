/** Declaration file generated by dts-gen */

type HTMLObject = TextElement | HTMLElement;

interface Attributes {
  key: string;
  value: string;
}

interface TextElement {
  content: string;
  type: 'text';
}

interface HTMLElement {
  attributes: Attributes[];
  children: HTMLObject[];
  tagName: string;
  type: 'element';
}

declare module 'himalaya' {
  export * from 'index';
}

declare module 'compat' {
  export function startsWith(str: unknown, searchString: unknown, position?: number): boolean;
  export function endsWith(str: unknown, searchString: unknown, position?: number): boolean;
  export function stringIncludes(str: unknown, searchString: unknown, position?: number): boolean;
  export function isRealNaN(x: unknown): boolean;
  export function arrayIncludes(array: unknown, searchElement: unknown, position?: number): boolean;
}

declare module 'format' {
  export function splitHead(str: unknown, sep: unknown): unknown[];
  export function unquote(str: unknown): unknown;
  export function format(nodes: unknown, options: unknown): unknown;
  export function formatAttributes(attributes: unknown): unknown;
}

declare module 'lexer' {
  export function feedPosition(position: unknown, str: unknown, len: unknown): void;
  export function jumpPosition(position: unknown, str: unknown, end: unknown): void;
  export function makeInitialPosition(): {
    index: number;
    column: number;
    line: number;
  };

  export function copyPosition(
    position: unknown,
  ): {
    index: unknown;
    line: unknown;
    column: unknown;
  };

  export default function lexer(str: unknown, options: unknown): unknown[];
  export function lex(state: unknown): void;
  export function findTextEnd(str: unknown, index: unknown): unknown;
  export function lexText(state: unknown): void;
  export function lexComment(state: unknown): void;
  export function lexTag(state: unknown): unknown;
  export function isWhitespaceChar(char: unknown): boolean;
  export function lexTagName(state: unknown): unknown;
  export function lexTagAttributes(state: unknown): void;
  export function lexSkipTag(tagName: unknown, state: unknown): void;
}

declare module 'parser' {
  export default function parser(tokens: unknown, options: unknown): unknown[];
  export function hasTerminalParent(tagName: unknown, stack: unknown, terminals: unknown): boolean;
  export function rewindStack(
    stack: unknown,
    newLength: unknown,
    childrenEndPosition: unknown,
    endPosition: unknown,
  ): void;
  export function parse(state: unknown): void;
}

declare module 'stringify' {
  export function formatAttributes(attributes: unknown): unknown;
  export function toHTML(tree: unknown, options: unknown): unknown;
  const _default: {
    toHTML: typeof toHTML;
  };
  export default _default;
}

declare module 'tags' {
  export const childlessTags: string[];
  export const closingTags: string[];
  export const closingTagAncestorBreakers: {
    li: string[];
    dt: string[];
    dd: string[];
    tbody: string[];
    thead: string[];
    tfoot: string[];
    tr: string[];
    td: string[];
  };
  export const voidTags: string[];
}

declare module 'index' {
  export const parseDefaults: {
    voidTags: string[];
    closingTags: string[];
    childlessTags: string[];
    closingTagAncestorBreakers: {
      li: string[];
      dt: string[];
      dd: string[];
      tbody: string[];
      thead: string[];
      tfoot: string[];
      tr: string[];
      td: string[];
    };
    includePositions: boolean;
  };

  export function parse(
    str: string,
    options?: {
      voidTags: string[];
      closingTags: string[];
      childlessTags: string[];
      closingTagAncestorBreakers: {
        li: string[];
        dt: string[];
        dd: string[];
        tbody: string[];
        thead: string[];
        tfoot: string[];
        tr: string[];
        td: string[];
      };
      includePositions: boolean;
    },
  ): HTMLObject[];

  export function stringify(
    ast: unknown[],
    options?: {
      voidTags: string[];
      closingTags: string[];
      childlessTags: string[];
      closingTagAncestorBreakers: {
        li: string[];
        dt: string[];
        dd: string[];
        tbody: string[];
        thead: string[];
        tfoot: string[];
        tr: string[];
        td: string[];
      };
      includePositions: boolean;
    },
  ): string;
}
