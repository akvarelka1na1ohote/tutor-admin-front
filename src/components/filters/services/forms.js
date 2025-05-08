import axios from "axios";

export const fetchForms = async (filter) => {
  try {
    const response = await axios.get("http://localhost:5148/forms", {
      params: {
        search: filter?.search,
        sortItem: filter?.sortItem,
        sortOrder: filter?.sortOrder,
      },
    });

    return response.data.notes;
  } catch (e) {
    console.error(e);
  }
};

export const createForm = async (form) => {
  try {
    const response = await axios.post("http://localhost:5148/forms", form);

    return response.data.status;
  } catch (e) {
    console.error(e);
  }
};