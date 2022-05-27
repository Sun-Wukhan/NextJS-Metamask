import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '1qqrrbw6', 
    dataset: 'production', 
    apiVersion: '2021-03-25', 
    token: 'skZvdHQBn0yZXxd5pK4Kie6Pu2HGYFJpsRdsnk1fpXWYlXCZDfusFcnzNbswCzltyNIV9tXBSuXnY9e6fUNfmGOAWLEBssveIANAfBeGapCJSpPeipCfCh5jKQNc38upKClXi5FNPlOwjTIZYewRcdLdlpjVRIC8LJ5UnkPjI02aF3ztIda7',
    useCdn: false,
})