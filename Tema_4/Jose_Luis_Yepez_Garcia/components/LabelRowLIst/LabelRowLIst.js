export const LabelRowList = ({ labels = [] } = {}) => {
  console.log(labels)
  return `
      ${labels.map((_, index) => `
        <div class="fila">Fila ${index + 1}</div>
      `).join('')}
  `
}