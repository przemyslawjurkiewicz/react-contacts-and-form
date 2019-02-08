var Contacts = React.createClass({
    propsTypes: {
        items: React.propTypes.array.isRequired,
    },
    render: function () {
        var contacts = this.props.items.map(function (contact) {
            return React.createElement(Conatct, { item: contact, key: contact.id });
        });

        return (
            React.createElement('ul', { className: 'contactsList' }, contacts)
        );
    }
})