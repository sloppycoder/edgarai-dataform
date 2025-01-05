function getCurrentDatasetId() {
    const defaultSchema = dataform.projectConfig.defaultSchema;
    const suffix = dataform.projectConfig.schemaSuffix;

    if (!suffix) {
        return defaultSchema;
    }

    // Check if defaultSchema already ends with "_" + suffix
    if (defaultSchema.endsWith(`_${suffix}`)) {
        return defaultSchema;
    }

    // If not, append "_" + suffix to defaultSchema
    return `${defaultSchema}_${suffix}`;
}

function getCurrentTimestamp() {
    return new Date().toISOString().replaceAll("-","").replaceAll(".","").replaceAll(":","")
}

module.exports = {
    getCurrentDatasetId, 
    getCurrentTimestamp
};
