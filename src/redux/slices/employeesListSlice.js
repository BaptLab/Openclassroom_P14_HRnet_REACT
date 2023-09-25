import { createSlice } from "@reduxjs/toolkit";

// Initial state for the employees list
const initialState = [];

/**
 * Redux slice for managing the employees list.
 * @type {Slice}
 */
export const employeesListSlice = createSlice({
  name: "employeesList",
  initialState,
  reducers: {
    /**
     * Action to add an employee to the list.
     * @param {Array} state - The current state (employees list).
     * @param {Object} action - The action object containing the payload (employee data).
     */
    addEmployee: (state, action) => {
      state.push(action.payload);
    },

    /**
     * Action to store the employees list in local storage.
     * @param {Array} state - The current state (employees list).
     */
    storeEmployeesList: (state) => {
      localStorage.setItem("employeesList", JSON.stringify(state));
    },

    /**
     * Action to retrieve the employees list from local storage.
     * @returns {Array} - The retrieved employees list from local storage or an empty array.
     */
    getEmployeesList: () => {
      const employeesList = localStorage.getItem("employeesList");
      return JSON.parse(employeesList) || [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployee, storeEmployeesList, getEmployeesList } =
  employeesListSlice.actions;

export default employeesListSlice.reducer;
