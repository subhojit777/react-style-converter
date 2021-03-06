var describe = require('mocha').describe
var it = require('mocha').it
var assert = require('chai').assert
var convert = require('../index')

describe('Tests convert()', function () {
  it('mapping should work', function () {
    assert.equal(convert('accelerator'), 'accelerator')
    assert.equal(convert('azimuth'), 'azimuth')
    assert.equal(convert('background'), 'background')
    assert.equal(convert('background-attachment'), 'backgroundAttachment')
    assert.equal(convert('background-color'), 'backgroundColor')
    assert.equal(convert('background-image'), 'backgroundImage')
    assert.equal(convert('background-position'), 'backgroundPosition')
    assert.equal(convert('background-position-x'), 'backgroundPositionX')
    assert.equal(convert('background-position-y'), 'backgroundPositionY')
    assert.equal(convert('background-repeat'), 'backgroundRepeat')
    assert.equal(convert('behavior'), 'behavior')
    assert.equal(convert('border'), 'border')
    assert.equal(convert('border-bottom'), 'borderBottom')
    assert.equal(convert('border-bottom-color'), 'borderBottomColor')
    assert.equal(convert('border-bottom-style'), 'borderBottomStyle')
    assert.equal(convert('border-bottom-width'), 'borderBottomWidth')
    assert.equal(convert('border-collapse'), 'borderCollapse')
    assert.equal(convert('border-color'), 'borderColor')
    assert.equal(convert('border-left'), 'borderLeft')
    assert.equal(convert('border-left-color'), 'borderLeftColor')
    assert.equal(convert('border-left-style'), 'borderLeftStyle')
    assert.equal(convert('border-left-width'), 'borderLeftWidth')
    assert.equal(convert('border-right'), 'borderRight')
    assert.equal(convert('border-right-color'), 'borderRightColor')
    assert.equal(convert('border-right-style'), 'borderRightStyle')
    assert.equal(convert('border-right-width'), 'borderRightWidth')
    assert.equal(convert('border-spacing'), 'borderSpacing')
    assert.equal(convert('border-style'), 'borderStyle')
    assert.equal(convert('border-top'), 'borderTop')
    assert.equal(convert('border-top-color'), 'borderTopColor')
    assert.equal(convert('border-top-style'), 'borderTopStyle')
    assert.equal(convert('border-top-width'), 'borderTopWidth')
    assert.equal(convert('border-width'), 'borderWidth')
    assert.equal(convert('bottom'), 'bottom')
    assert.equal(convert('caption-side'), 'captionSide')
    assert.equal(convert('clear'), 'clear')
    assert.equal(convert('clip'), 'clip')
    assert.equal(convert('color'), 'color')
    assert.equal(convert('content'), 'content')
    assert.equal(convert('counter-increment'), 'counterIncrement')
    assert.equal(convert('counter-reset'), 'counterReset')
    assert.equal(convert('cue'), 'cue')
    assert.equal(convert('cue-after'), 'cueAfter')
    assert.equal(convert('cue-before'), 'cueBefore')
    assert.equal(convert('cursor'), 'cursor')
    assert.equal(convert('direction'), 'direction')
    assert.equal(convert('display'), 'display')
    assert.equal(convert('elevation'), 'elevation')
    assert.equal(convert('empty-cells'), 'emptyCells')
    assert.equal(convert('filter'), 'filter')
    assert.equal(convert('float'), 'float')
    assert.equal(convert('font'), 'font')
    assert.equal(convert('font-family'), 'fontFamily')
    assert.equal(convert('font-size'), 'fontSize')
    assert.equal(convert('font-size-adjust'), 'fontSizeAdjust')
    assert.equal(convert('font-stretch'), 'fontStretch')
    assert.equal(convert('font-style'), 'fontStyle')
    assert.equal(convert('font-variant'), 'fontVariant')
    assert.equal(convert('font-weight'), 'fontWeight')
    assert.equal(convert('height'), 'height')
    assert.equal(convert('ime-mode'), 'imeMode')
    assert.equal(convert('include-source'), 'includeSource')
    assert.equal(convert('layer-background-color'), 'layerBackgroundColor')
    assert.equal(convert('layer-background-image'), 'layerBackgroundImage')
    assert.equal(convert('layer-flow'), 'layerFlow')
    assert.equal(convert('layer-grid'), 'layerGrid')
    assert.equal(convert('layer-grid-char'), 'layerGridChar')
    assert.equal(convert('layer-grid-char-spacing'), 'layerGridCharSpacing')
    assert.equal(convert('layer-grid-line'), 'layerGridLine')
    assert.equal(convert('layer-grid-mode'), 'layerGridMode')
    assert.equal(convert('layer-grid-type'), 'layerGridType')
    assert.equal(convert('left'), 'left')
    assert.equal(convert('letter-spacing'), 'letterSpacing')
    assert.equal(convert('line-break'), 'lineBbreak')
    assert.equal(convert('line-height'), 'lineHeight')
    assert.equal(convert('line-style'), 'lineStyle')
    assert.equal(convert('line-style-image'), 'lineStyleImage')
    assert.equal(convert('line-style-position'), 'lineStylePosition')
    assert.equal(convert('line-style-type'), 'lineStyleType')
    assert.equal(convert('margin'), 'margin')
    assert.equal(convert('margin-bottom'), 'marginBottom')
    assert.equal(convert('margin-left'), 'marginLeft')
    assert.equal(convert('margin-right'), 'marginRight')
    assert.equal(convert('margin-top'), 'marginTop')
    assert.equal(convert('marker-offset'), 'markerOffset')
    assert.equal(convert('marks'), 'marks')
    assert.equal(convert('max-height'), 'maxHeight')
    assert.equal(convert('max-width'), 'maxWidth')
    assert.equal(convert('min-height'), 'minHeight')
    assert.equal(convert('min-width'), 'minWidth')
    assert.equal(convert('-moz-binding'), 'MozBinding')
    assert.equal(convert('-moz-border-radius'), 'MozBorderRadius')
    assert.equal(convert('-moz-border-radius-topleft'), 'MozBorderRadiusTopleft')
    assert.equal(convert('-moz-border-radius-topright'), 'MozBorderRadiusTopright')
    assert.equal(convert('-moz-border-radius-bottomleft'), 'MozBorderRadiusBottomleft')
    assert.equal(convert('-moz-border-radius-bottomright'), 'MozBorderRadiusBottomright')
    assert.equal(convert('-moz-border-top-colors'), 'MozBorderTopColors')
    assert.equal(convert('-moz-border-right-colors'), 'MozBorderRightColors')
    assert.equal(convert('-moz-border-bottom-colors'), 'MozBorderBottomColors')
    assert.equal(convert('-moz-border-left-colors'), 'MozBorderLeftColors')
    assert.equal(convert('-moz-opacity'), 'MozOpacity')
    assert.equal(convert('-moz-outline'), 'MozOutline')
    assert.equal(convert('-moz-outline-color'), 'MozOutlineColor')
    assert.equal(convert('-moz-outline-style'), 'MozOutlineStyle')
    assert.equal(convert('-moz-outline-width'), 'MozOutlineWidth')
    assert.equal(convert('-moz-user-focus'), 'MozUserFocus')
    assert.equal(convert('-moz-user-input'), 'MozUserInput')
    assert.equal(convert('-moz-user-modify'), 'MozUserModify')
    assert.equal(convert('-moz-user-select'), 'MozUserSelect')
    assert.equal(convert('orphans'), 'orphans')
    assert.equal(convert('outline'), 'outline')
    assert.equal(convert('outline-color'), 'outlineColor')
    assert.equal(convert('outline-style'), 'outlineStyle')
    assert.equal(convert('outline-width'), 'outlineWidth')
    assert.equal(convert('overflow'), 'overflow')
    assert.equal(convert('overflow-x'), 'overflowX')
    assert.equal(convert('overflow-y'), 'overflowY')
    assert.equal(convert('padding'), 'padding')
    assert.equal(convert('padding-bottom'), 'paddingBottom')
    assert.equal(convert('padding-left'), 'paddingLeft')
    assert.equal(convert('padding-right'), 'paddingRight')
    assert.equal(convert('page'), 'page')
    assert.equal(convert('page-break-after'), 'pageBreakAfter')
    assert.equal(convert('page-break-before'), 'pageBreakBefore')
    assert.equal(convert('page-break-inside'), 'pageBreakInside')
    assert.equal(convert('pause-after'), 'pauseAfter')
    assert.equal(convert('pause-before'), 'pauseBefore')
    assert.equal(convert('pause'), 'pause')
    assert.equal(convert('pitch-range'), 'pitchRange')
    assert.equal(convert('pitch'), 'pitch')
    assert.equal(convert('play-during'), 'playDuring')
    assert.equal(convert('position'), 'position')
    assert.equal(convert('quotes'), 'quotes')
    assert.equal(convert('richness'), 'richness')
    assert.equal(convert('right'), 'right')
    assert.equal(convert('speak-header'), 'speakHeader')
    assert.equal(convert('speak-numeral'), 'speakNumeral')
    assert.equal(convert('speak-punctuation'), 'speakPunctuation')
    assert.equal(convert('speak'), 'speak')
    assert.equal(convert('speech-rate'), 'speechRate')
    assert.equal(convert('stress'), 'stress')
    assert.equal(convert('table-layout'), 'tableLayout')
    assert.equal(convert('text-align'), 'textAlign')
    assert.equal(convert('text-decoration'), 'textDecoration')
    assert.equal(convert('text-indent'), 'textIndent')
    assert.equal(convert('text-transform'), 'textTransform')
    assert.equal(convert('top'), 'top')
    assert.equal(convert('unicode-bidi'), 'unicodeBidi')
    assert.equal(convert('vertical-align'), 'verticalAlign')
    assert.equal(convert('visibility'), 'visibility')
    assert.equal(convert('voice-family'), 'voiceFamily')
    assert.equal(convert('volume'), 'volume')
    assert.equal(convert('white-space'), 'whiteSpace')
    assert.equal(convert('windows'), 'windows')
    assert.equal(convert('width'), 'width')
    assert.equal(convert('word-spacing'), 'wordSpacing')
    assert.equal(convert('z-index'), 'zIndex')
  })
})
