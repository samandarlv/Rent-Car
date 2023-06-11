const errorHandler = async (res, error) => {
    console.log(error);
    res.send({ message: `Xatolik ${error}` });
};

module.exports = { errorHandler };
