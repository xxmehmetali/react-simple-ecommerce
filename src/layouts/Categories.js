import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { useGetCategoriesQuery } from '../features/api/apiSlice';

export default function Categories() {

  const { data : categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData ?? [];

  return (

    <div>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          {
            categories.map((category) => (
              <ListGroup.Item>{category}</ListGroup.Item>
            ))


          }
                



        </ListGroup>
      </Card>
    </div>
  )
}
