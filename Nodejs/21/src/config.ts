const missingSetting = "Warining: No value set for this environment variable";

const config = {
    "PORT": process.env.PORT || missingSetting,
};

export default config;
