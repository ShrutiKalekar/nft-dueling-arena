import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";

dotenv.config();
// console.log("jiyg");
// const key = process.env.PRIVATE_KEY;
// console.log(key);

console.log(process.env.PRIVATE_KEY);

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");



(async () => {
    // const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai", {
        secretKey: "IT6MPwd1HhHFlKVWkzOqmZ1aOf_SvbxT9Yev3oeyQdwhVzYGAKNkqsmmCSDC0HnnXfXd-gwlqaSAZ5RIAQDr0Q",
      });
    // console.log(process.env.PRIVATE_KEY);

    const packAddress = "0x9d284cD736Aaf82bD6Ac36bFACf92Af830948791";//changed
    const cardAddress = "0x297d9CB98f7E88b9894c0aB3150a9F241BFCE7c7";//changed

    const pack = sdk.getContract(packAddress, "pack");
    const card = sdk.getContract(cardAddress, "edition");

    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "ipfs://QmSdnB6ATiEfAAH8WHPohycrxTWXwNS3AYLCdLgBEZn91C/pokkentournament.jpg";//changed

    console.log("Creating pack");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Pack 1",
            description: "A new card pack",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 0,
                quantityPerReward: 1,
                totalRewards: 27,
            },
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 2,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards: 27,
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 5,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 6,
                quantityPerReward: 1,
                totalRewards: 27,
            },
            {
                contractAddress: cardAddress,
                tokenId: 7,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 8,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 9,
                quantityPerReward: 1,
                totalRewards: 27,
            },
            {
                contractAddress: cardAddress,
                tokenId: 10,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 11,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 12,
                quantityPerReward: 1,
                totalRewards: 27,
            },
            {
                contractAddress: cardAddress,
                tokenId: 13,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 14,
                quantityPerReward: 1,
                totalRewards: 3,
            },
        ],
        rewardsPerPack: 5,
    });

    console.log("Packs created");
})();