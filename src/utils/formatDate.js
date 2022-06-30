const formatDate = (input) => {
  const date = new Date(input);

  return date.toLocaleDateString();
};

export default formatDate;
