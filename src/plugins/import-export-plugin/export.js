/*****************************
 * Service "export".
 ****************************/

/**
 * Get the service.
 */
const service = strapi.plugin("import-export-entries").service("export");

/**
 * Method exportData.
 */
await service.exportData(
  options({
    /**
     * Export format.
     * - csv
     */
    exportFormat: "csv",
    // /** Search query used to select the entries to export. The package `qs` is used to parse the query. */
    // search?: "",
    // /** Whether to apply the search query. */
    // applySearch?: boolean,
    /** Whether to export relations as id instead of plain objects. */
    relationsAsId: false,
    /** Deepness of the exported data. */
    deepness: 3,
  })
);
