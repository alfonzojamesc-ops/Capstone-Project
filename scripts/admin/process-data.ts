// @ts-nocheck
export const processDataIntoHierarchy = (dataObject) => {
  const hierarchy = [];
  Object.entries(dataObject).forEach(([phaseKey, phaseValue]) => {
    if (!phaseValue || !phaseValue.blocks) return;
    const blocksArray = [];
    Object.entries(phaseValue.blocks).forEach(([blockKey, blockValue]) => {
      if (!blockValue || !blockValue.plots) return;
      const plotsArray = [];
      Object.entries(blockValue.plots).forEach(([plotKey, plotValue]) => {
        if (!plotValue) return;
        plotsArray.push({
          id: `${phaseKey}-${blockKey}-${plotKey}`,
          plot: plotKey,
          grid_coordinates: plotValue.grid_coordinates,
          status: plotValue.status,
          maintenance_status: plotValue.maintenance_status,
          owner: plotValue.owner,
          deceased: plotValue.deceased,
        });
      });
      blocksArray.push({
        block: blockKey,
        plots: plotsArray,
      });
    });
    hierarchy.push({
      phase: phaseKey,
      blocks: blocksArray,
    });
  });
  return hierarchy;
};
