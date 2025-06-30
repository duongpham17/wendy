import mongoose, {Schema, model, Document, Types} from 'mongoose';

export interface IGalleryApi {
    _id: Types.ObjectId | string,
    type: string,
    images: string[],
    createdAt: Date
}

export interface IGallery extends Document, IGalleryApi {
    _id: Types.ObjectId,
};

const schema = new Schema<IGallery>({
    type: {
        type: String,
    },
    images: [

    ],
    createdAt: {
        type: Date,
        default: new Date
    },
});

const Gallery = mongoose.models.Gallery || model<IGallery>('Gallery', schema);

export default Gallery;