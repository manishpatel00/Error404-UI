/**
 * Dynamic code loading module
 * Uses the server action approach instead of static imports
 * Code is fetched on-demand from component files
 */

// Placeholder export for compatibility
// Code is now fetched dynamically using get404Content server action
export const codes = {} as const;

// Import the server action for fetching code dynamically
export {
  get404Content,
  get404ContentMultiple,
  list404Components,
} from "@/app/actions/get-404-content";
