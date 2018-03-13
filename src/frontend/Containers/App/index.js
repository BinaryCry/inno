import { connect } from 'react-redux';
import App from '../../Components/App'
import { fetchRecordsAction, clearRecordsAction, addOneRecordAction } from '../../Actions/records';

const mapStateToProps = (state) => ({
    records: state.records
});

const mapDispatchToProps = (dispatch) => ({
    fetchRecords: () => dispatch(fetchRecordsAction()),
    clearRecords: () => dispatch(clearRecordsAction()),
    addOneRecord: (record) => dispatch(addOneRecordAction(record))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);