const blocks = {
    goodBlocks: [
        { patterns: ["!!^^^!"], className: "good-01" },
        { patterns: ["::|::|"], className: "good-02" },
        { patterns: ["``~~~;"], className: "good-03" },
        { patterns: ["##%%##"], className: "good-01" },
        { patterns: ["==||=="], className: "good-02" },
        { patterns: ["++**++"], className: "good-03" },
        { patterns: ["%$$%%$"], className: "good-01" },
        { patterns: ["&&**&&"], className: "good-02" },
        { patterns: ["$$@@$$"], className: "good-03" },
        { patterns: ["**!!**"], className: "good-01" },
        { patterns: ["@@~~@@"], className: "good-02" }
    ],
    reallyGoodBlocks: [
        { patterns: ["SHINE!", "BRAVE!"], className: "really-good-01" },
        { patterns: ["GLOW!!", "SOAR!!"], className: "really-good-02" },
        { patterns: ["ZING!!", "KAPOW!"], className: "really-good-01" },
        { patterns: ["BLOOP!", "BLIP!!"], className: "really-good-02" }
    ],
    badBlocks: [
        { patterns: ["||||||", "|||***"], className: "bad-01" },
        { patterns: ["[[[[[[", "[[***["], className: "bad-02" },
        { patterns: ["{{{{{{", "{{***{"], className: "bad-02" },
        { patterns: ["\\\\\\\\\\\\", "\\\\***\\"], className: "bad-01" },
        { patterns: ["^^^===", "^^***^"], className: "bad-02" },
        { patterns: ["<<<<<", "<<***<"], className: "bad-01" },
        { patterns: ["```===", "``***`"], className: "bad-01" }
    ],
    reallyBadBlocks: [
        { patterns: ["GLITCH", "ERROR!"], className: "really-bad-01" },
        { patterns: ["OOPS!!", "WHOOPS"], className: "really-bad-02" }
    ]
};

export default blocks;
