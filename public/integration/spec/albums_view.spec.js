describe('Albums View', function() {
  beforeEach(function() {
    this.view = new AlbumsView({ collection: albums_scaffold });
  });

  it('has a collection property assigned', function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(albums_scaffold.length);
  });

  it('has a Handlebars template compiled', function() {
    expect(this.view.template).toBeDefined();
  });

  it('renders to an #albums container when render called', function() {
    this.view.render();
    expect($('#albums li').length).toBe(albums_scaffold.length);
  });

  it('re-renders when the collection changes', function() {
    var model = albums_scaffold.findWhere({ artist: 'Tori Kelly' }),
        original_html, new_html;

    this.view.render();
    original_html = $('#albums').html();
    model.set('title', 'New Title');
    new_html = $('#albums').html();
    expect(original_html).not.toEqual(new_html);
  });
});
