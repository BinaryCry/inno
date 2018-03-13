import striptags from 'striptags';

export const recordValidation = (maxLength, isNeedClearFromTags) =>
    (string) => string.length <= maxLength ?
        isNeedClearFromTags ?
            striptags(string) :
            string :
        false;