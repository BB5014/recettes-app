import React from "react";

const withPlaceholder = WrappedComponent => props => (
	<WrappedComponent placeholder="Mon Hoc" {...props} />
);

export default withPlaceholder;
