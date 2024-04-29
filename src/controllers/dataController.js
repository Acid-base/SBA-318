// File: /src/controllers/dataController.js

const getData = (req, res) => {
    const data = {
        message: 'Data fetched successfully',
        data: { value: 42 }
    };
    res.json(data);
};

module.exports = {
    getData
};
