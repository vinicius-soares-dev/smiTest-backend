/**
 * Middleware that checks if the 'description' field is present in the request body.
 * If it's not present, responds with a 400 (Bad Request) status and an error message.
 * Otherwise, allows execution to continue to the next function/middleware.
 * @param {object} req - HTTP request.
 * @param {object} res - HTTP response.
 * @param {function} next - Function to continue execution.
 */

const demandsValidation = (req, res, next) => {
    const { description } = req.body;

    if(!description) {
        res.status(400).json({ error: "Empty field, unauthorized."})
        return;
    }

    next();
}

module.exports = demandsValidation;