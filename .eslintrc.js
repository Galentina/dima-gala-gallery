module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "react", "import"],
  extends: [
    "airbnb-typescript", 
    "plugin:@typescript-eslint/recommended", 
    "plugin:import/typescript",
  ],
  rules: {
    "no-extraneous-dependencies": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "jsx-quotes": ["error", "prefer-double"],
    "react/prop-types": 0,
    "indent": ["error", 2],
    "linebreak-style": 1,
    "quotes": ["error", "single"],
    "space-before-function-paren": ["error", "never"],
    "@typescript-eslint/space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "no-underscore-dangle": ["error", {
      "allow": ["__typename"]
    }],
    "no-trailing-spaces": ["error", {
      "ignoreComments": true
    }],
    "max-len": ["error", {
      "code": 120
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": ["tsconfig.json"],
    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  ignorePatterns: ["/*.*", ".eslintrc.js"],
  env: {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      },
      "typescript": {}
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
      "moduleDirectory": ["node_modules", "src/"]
    }
  },
};