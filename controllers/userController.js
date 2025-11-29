// Protected user info route
exports.getMe = async (req, res) => {
  try {
    // req.user is attached by auth middleware
    const userInfo = {
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    };
    res.json({ user: userInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
