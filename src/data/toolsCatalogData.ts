import type { Tool, ToolProductLink } from '../types';
import defaultTools from './defaultTools.json';
import defaultToolProductLinks from './defaultToolProductLinks.json';

export const DEFAULT_TOOLS = defaultTools as Tool[];
export const DEFAULT_TOOL_PRODUCT_LINKS = defaultToolProductLinks as ToolProductLink[];

export function resolveTools(remote: Tool[] | null | undefined): Tool[] {
  if (remote && remote.length > 0) return remote;
  return DEFAULT_TOOLS;
}

export function resolveToolProductLinks(
  remote: ToolProductLink[] | null | undefined,
  countryCode: string,
): ToolProductLink[] {
  if (remote && remote.length > 0) return remote;
  return DEFAULT_TOOL_PRODUCT_LINKS.filter((link) => link.country_code === countryCode);
}
