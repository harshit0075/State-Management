export const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          [action.payload.index]: action.payload.value,
        };
      case 'RESET':
        return Array(10).fill('');
      default:
        return state;
    }
  };