import mongoose, {Schema, model, Document, Types} from 'mongoose';

export interface IPricesApi {
    _id: Types.ObjectId | string,
    type: string,
    prices: string[],
    createdAt: Date
}

export interface IPrices extends Document, IPricesApi {
    _id: Types.ObjectId,
};

const schema = new Schema<IPrices>({
    type: {
        type: String,
    },
    prices: [

    ],
    createdAt: {
        type: Date,
        default: new Date
    },
});

const Prices = mongoose.models.Prices || model<IPrices>('Prices', schema);

export default Prices;