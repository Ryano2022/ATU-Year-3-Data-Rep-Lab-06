import Card from 'react-bootstrap/Card';

function BookItem(props) {
    return (
        <div>
            <center> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.myBook.thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{props.myBook.title}</Card.Title>
                        <Card.Text>
                            {props.myBook.authors[0]} 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}

export default BookItem;