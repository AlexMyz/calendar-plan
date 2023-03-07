const exportXLSX = () => {
  document.getElementById("exportXLSX").addEventListener('click', function() {
    let wb = XLSX.utils.table_to_book(document.getElementById("out-table"));
    XLSX.writeFile(wb, "calendar-plan.xlsx");
  })
}

export default exportXLSX