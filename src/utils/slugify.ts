export default function (string: string) {
    string = String(string);

    return string
        // Make lower-case
        .toLowerCase()
        // Remove misc punctuation
        .replace(/['"’‘”“`]/g, '')
        // Replace non-word characters with dashes
        .replace(/[\W|_]+/g, '-')
        // Remove starting and trailing dashes
        .replace(/^-+|-+$/g, '');
}
