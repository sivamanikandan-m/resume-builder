export const saveResume = (data) => {
  localStorage.setItem("resume", JSON.stringify(data));
};

export const loadResume = () => {
  const data = localStorage.getItem("resume");
  return data ? JSON.parse(data) : null;
};
