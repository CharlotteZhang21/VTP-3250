var statue_new = "data:image/png;base64,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";