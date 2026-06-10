---
title: Test GraphQL
description: ทดสอบ GraphQL queries, mutations แล subscriptions
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-function
---

## Goal

ทดสอบ GraphQL API ให้ครอบคลุม รวม queries, mutations, subscriptions, แล schema validation

## Execute

### 1. Setup GraphQL Testing

1. ติดตั้ง GraphQL testing library
2. Configure test GraphQL server
3. Setup schema validation
4. Configure mock resolvers

### 2. Test Queries

1. Test simple queries
2. Test nested queries
3. Test queries with arguments
4. Test queries with variables

### 3. Test Mutations

1. Test create mutations
2. Test update mutations
3. Test delete mutations
4. Test mutation error handling

### 4. Test Subscriptions

1. Test subscription connection
2. Test subscription updates
3. Test subscription disconnection
4. Test subscription error handling

### 5. Test Schema Validation

1. Validate schema types
2. Test required fields
3. Test field types
4. Test enum values

### 6. Test Error Handling

1. Test GraphQL errors
2. Test validation errors
3. Test resolver errors
4. Test network errors

### 7. Test Authentication

1. Test authenticated queries
2. Test unauthorized access
3. Test permission errors
4. Test token validation

### 8. Test Performance

1. Measure query execution time
2. Test query complexity
3. Test N+1 queries
4. Verify query optimization

### 9. Run GraphQL Tests

1. Execute query tests
2. Execute mutation tests
3. Execute subscription tests
4. Document GraphQL issues

## Rules

### 1. Query Testing

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}
```

### 2. Mutation Testing

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}
```

### 3. Subscription Testing

```graphql
subscription OnUserUpdate($userId: ID!) {
  userUpdated(userId: $userId) {
    id
    name
    email
  }
}
```

### 4. Error Handling

- Return GraphQL errors สำหรับ validation failures
- Use proper error codes
- Include error messages ที่ชัดเจน
- Log errors สำหรับ debugging

### 5. Performance Optimization

- Use DataLoader สำหรับ N+1 queries
- Implement query complexity limits
- Cache query results
- Use persisted queries

## Expected Outcome

- [ ] Queries tested แล validated
- [ ] Mutations tested แล validated
- [ ] Subscriptions tested แล validated
- [ ] Schema validated
- [ ] Error handling tested
- [ ] Performance optimized

## Common Mistakes

- ไม่ test subscriptions
- ไม่ handle GraphQL errors
- ไม่ validate schema
- N+1 query problems
- ไม่ limit query complexity
- ไม่ test authentication

## Anti-Patterns

- ❌ ไม่ test subscriptions
- ❌ ไม่ handle GraphQL errors
- ❌ N+1 queries
- ❌ ไม่ validate schema
- ❌ ไม่ limit complexity

