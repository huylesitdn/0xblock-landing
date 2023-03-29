const presets = [
    [
        "@babel/env",
        {
            "exclude": ["transform-async-to-generator", "transform-regenerator"]
        }
    ],
    "@babel/preset-react"
];

module.exports = {
    presets,
    "sourceType": "unambiguous"
};