$(function(){
  const gallery = document.getElementById('gallery');
  // list all your image names here:
  const photos = [
      '000420060002.jpg',
      '000420060004.jpg',
      '000420060006.jpg',
      '000420060008.jpg',
      '000420070007.jpg',
      '000420080002.jpg',
      '000420080008.jpg',
      'IMG_4988.jpeg',
      'IMG_4747.jpeg',
      'IMG_4723.jpg',
      'IMG_4621.jpeg',
      '000482610007.jpg',
      '000482610004.jpg',
      '000477260007.jpg',
      '000477250006.jpg',
      '000477250003.jpg',
      '000447670002.jpg',
      '000444600012.jpg',
      '000444600011.jpg',
      '000444590001.jpg',
      '52653044.jpg',
      '52653038.jpg',
      '52653037.jpg',
      '52653036.jpg',
      '48646720.jpg',
      '48646711.jpg',
      '48646709.jpg',
      '48646707.jpg',
      '48079598.jpg',
      '48079596.jpg',
      '48079592.jpg',
      '47672864.jpg',
      '46484338.jpg',
      '46484347.jpg',
      '46484332.jpg',
      '46484325.jpg',
      '46484324.jpg',
      '45583494.jpg',
      '45583484.jpg',
      '45583456.jpg',
      '45583448.jpg',
  ];

  photos.forEach(fname => {
      const fig = document.createElement('figure');
      const img = document.createElement('img');

      // Set data attributes for better loading
      img.dataset.src = `images/photos/${fname}`;
      img.src = `images/photos/${fname}`;
      img.alt = fname.replace(/\.[^.]+$/, '').replace(/_/g, ' ');

      img.loading = 'lazy'; // native lazy-loading hint to the browser
      img.decoding = 'async';

      fig.appendChild(img);
      gallery.appendChild(fig);
  });

  // then kick off your Justified Gallery init as before
  $('#gallery').justifiedGallery({
    selector: 'figure',
    rowHeight:        350,    // target row height in px
    maxRowHeight:     500,    // allow some variation
    margins:          5,      // gap between images
    lastRow:          'nojustify', // or 'nojustify', 'hide'
    captions:         false,   // use <figcaption> or alt tags
    
    waitThumbnailsLoad: false,   // ← progressive reveal

    justifyThreshold: 0.90,           // Lower threshold = faster row completion
    refreshTime: 50,                  // Check for new images more frequently
    efreshSensitivity: 0,            // Always refresh on image load
    
    imagesAnimationDuration: 300, // nice, quick fade
    CSSAnimation: true, // use CSS animations

    extension: /\.jpg$|\.jpeg$|\.png$|\.gif$/i,

    rel: 'gallery',
    target: '_blank'
  });
});