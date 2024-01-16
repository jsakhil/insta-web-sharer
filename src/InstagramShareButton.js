"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InstagramShareButton = function (_a) {
    var imageUrl = _a.imageUrl, caption = _a.caption;
    var handleShare = function () {
        console.log("🚀 ~ TEST");
    };
    return (react_1.default.createElement("button", { onClick: handleShare }, "Share on Instagram"));
};
exports.default = InstagramShareButton;
