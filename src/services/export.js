export const expCreateExportElement = (document, content, fileName) => {
  const element = document.createElement('a');
  const file = new Blob([content], { type: 'data' });
  element.href = URL.createObjectURL(file);
  element.download = fileName;
  return element;
};
  
// for future expansions
export const expDummy = () => null;
  