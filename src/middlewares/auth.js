const adminAuth = (req, res, next) => {
  const token = "abc";
  const isAuthorized =token === "abc";

  if (!isAuthorized){
    res.status(404).send("Not Authorized!");
  }
  else{
    next();
  }
}

const useAuth = (req, res, next) => {
  const token = "xyz";
  const isAuthorized = token === "xyz";

  if (!isAuthorized){
    res.status(404).send("Not Authorized!");
  }
  else{
    next();
  }
}

module.exports = {
  adminAuth,
  useAuth,
}