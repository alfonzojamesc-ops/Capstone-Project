export const plotMatchesSearch = (plot, query) => {
  if (!query) return true;

  const lowerQuery = query.toLowerCase();

  if (plot.plot.toLowerCase().includes(lowerQuery)) return true;
  if (
    plot.status.toLowerCase().includes(lowerQuery) ||
    plot.maintenance_status.toLowerCase().includes(lowerQuery)
  )
    return true;

  if (plot.owner) {
    const ownerFields = [
      plot.owner.first_name,
      plot.owner.middle_name,
      plot.owner.last_name,
      plot.owner.sex,
      plot.owner.date_of_birth,
      plot.owner.address,
      plot.owner.phone,
      plot.owner.email,
      plot.owner.purchase_date,
      plot.owner.deed_number,
      plot.owner.notes,
    ];
    for (let field of ownerFields) {
      if (field && field.toLowerCase().includes(lowerQuery)) return true;
    }
  }

  if (plot.deceased) {
    const deceasedFields = [
      plot.deceased.first_name,
      plot.deceased.middle_name,
      plot.deceased.last_name,
      plot.deceased.sex,
      plot.deceased.date_of_birth,
      plot.deceased.date_of_death,
      plot.deceased.date_of_interment,
      plot.deceased.burial_type,
      plot.deceased.funeral_home,
      plot.deceased.notes,
    ];
    for (let field of deceasedFields) {
      if (field && field.toLowerCase().includes(lowerQuery)) return true;
    }
    if (
      plot.deceased.image &&
      plot.deceased.image.toLowerCase().includes(lowerQuery)
    )
      return true;
  }

  return false;
};
