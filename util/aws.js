import aws from 'aws-sdk';

export async function connectToAWS() {
    aws.config.update({
        accessKeyId: process.env.AWS_SECRET_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.REGION,
        signatureVersion: 'v4',
    });

    // var getParams = {
    //     Bucket: bucket, // your bucket name,
    // }

    return new aws.S3();
}