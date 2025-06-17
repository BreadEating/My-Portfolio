$(function(){
  // wait until all images are loaded, then kick off the layout
  $('#gallery').imagesLoaded( function() {
    $('#gallery').justifiedGallery({
      selector: 'figure',
      rowHeight:        350,    // target row height in px
      maxRowHeight:     500,    // allow some variation
      margins:          5,      // gap between images
      lastRow:          'justify', // or 'nojustify', 'hide'
      captions:         false,   // use <figcaption> or alt tags
      waitThumbnailsLoad: false,   // ← progressive reveal
      imagesAnimationDuration: 300, // nice, quick fade
      CSSAnimation: true // use CSS animations
    });
  });
});
