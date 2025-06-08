windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneHalfRect)) <= 1.0) {
        var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
        var oneThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
        var threeQuarterRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        threeQuarterRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 3 / 4.0);
        var oneQuarterRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneQuarterRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);

        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return twoThirdRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            return oneThirdRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdRect, windowRect)) {
            return threeQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(threeQuarterRect, windowRect)) {
            return oneQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuarterRect, windowRect)) {
            return oneHalfRect;
        }
    }
    return oneHalfRect;
}, "SpectacleWindowActionLeftHalf");
