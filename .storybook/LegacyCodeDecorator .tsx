import React, { useEffect } from "react";

export const LegacyCodeDecorator = (Story: any) => {
    const [isLegacyCode, setIsLegacyCode] = React.useState(false);

    const toggleLegacyCode = () => {
        setIsLegacyCode(prev => !prev);
    };

    // Add or remove the class 'legacy' based on the state
    useEffect(() => {
        document.documentElement.classList.toggle("legacy", isLegacyCode);
    }, [isLegacyCode]); // Runs every time `isLegacyCode` changes

    return (
        <>
            <button
                onClick={toggleLegacyCode}
                style={{
                    position: "fixed",
                    top: 10,
                    right: 60,
                    zIndex: 9999,
                    padding: "8px 12px",
                    backgroundColor: isLegacyCode ? "#333" : "#fff",
                    color: isLegacyCode ? "#fff" : "#333",
                    border: "none",
                    borderRadius: "5px"
                }}
            >
                {isLegacyCode ? "Legacy Code: ON" : "Legacy Code: OFF"}
            </button>
            <Story />
        </>
    );
};
