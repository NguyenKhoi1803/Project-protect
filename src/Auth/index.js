export const login = (email, password, listUser, callback = null) => {
  console.log("listUser", listUser);
  const pattern = new RegExp(email, "i");
  const isSucceed = listUser.find(
    (item) => pattern.test(item.email) && item.password === password
  );
  if (isSucceed) {
    localStorage.setItem("account", JSON.stringify(isSucceed));
    if (callback != null && typeof callback == "function") {
      callback(isSucceed);
    }
  } else {
    alert("ten dang nhap hoac mat khau sai");
  }
};

export const checkLogin = () => {
  return localStorage.getItem("account") != null;
};
export const checkAdmin = () => {
  const user = JSON.parse(localStorage.getItem("account") || "{}");
  return user.isAdmin;
};
export const logout = () => {
  localStorage.removeItem("account");
};

export const getAccountInfo = () => {
  return JSON.parse(localStorage.getItem("account") || "{}");
};
