const Book = require('../../../models/Book');
const BookDetails = require('../../../models/BookDetails');
const User = require('../../../models/User');
const logger = require('../../../utils/logger');
const Response = require('../../../utils/response');

const AddBook = async (req, res) => {
    try {
        const { user_id } = req.user;
        const { rent, title, author, description, genre, price, open_to_sale } = req.body;

        const user = await User.findOne({ user_id });

        if (!user) return Response(req, res, 400, 'User not found');

        const bookDetails = await BookDetails.create({
            title,
            author,
            description,
            genre,
            open_to_sale,
            price
        });

        const book = await Book.create({
            is_hidden: false,
            is_borrowed: false,
            rent,
            details: bookDetails._id
        });

        // await user.books.push(book);

        await user.updateOne({
            _id: user._id,
            $push: {
                books: book
            }
        });
        await book.save();
        await bookDetails.save();

        const responseData = {
            book
        };
        responseData.book.details = bookDetails;

        return Response(req, res, 200, 'Book added', responseData);
    } catch (error) {
        logger.error(error.message);
        return Response(req, res);
    }
};

module.exports = AddBook;
