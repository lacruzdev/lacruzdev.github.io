# Naming Conventions Manual

## 1\. **General Principles**

- **Consistency**: Use consistent naming conventions throughout the codebase.

- **Clarity**: Choose names that clearly describe the purpose or function of the variable, function, class, etc.

- **Readability**: Make names readable and easy to understand.

- **Avoid Abbreviations**: Avoid using abbreviations unless they are well-known and widely accepted.

## 2\. **Development Environment**

### **2.1 Variables**

- **Global Variables**: Use UPPER_CASE_WITH_UNDERSCORES.

```
MAX_CONNECTIONS = 10
```

- **Local Variables**: Use lower_case_with_underscores.

```
user_name = "JohnDoe"
```

- **Constants**: Use UPPER_CASE_WITH_UNDERSCORES.

```
PI = 3.14159
```

### **2.2 Functions and Methods**

- **Function Names**: Use lower_case_with_underscores.

```python
def  calculate_total_price():
  pass
```

- **Method Names**: Use lower_case_with_underscores.

```python
class  ShoppingCart:
  def  add_item(self, item):
    pass
```

### **2.3 Classes**

- **Class Names**: Use CamelCase.

```python
class  ShoppingCart:
  pass
```

## **3\. Database Environment**

### **3.1 Tables**

- **Table Names**: Use lower_case_with_underscores.

```sql
CREATE  TABLE  user_accounts (
  user_id INT  PRIMARY KEY,
  user_name VARCHAR(255)
);
```

### **3.2 Columns**

- **Column Names**: Use lower_case_with_underscores.

```sql
CREATE  TABLE  user_accounts (
  user_id INT  PRIMARY KEY,
  user_name VARCHAR(255)
);
```

### **3.3 Indexes**

- **Index Names**: Use ix_<table_name></table_name>_<column_name>.</column_name>

```sql
CREATE  INDEX  ix_user_accounts_user_name  ON user_accounts(user_name);
```

### **3.4 Foreign Keys**

- **Foreign Key Names**: Use fk_<table_name></table_name>_<column_name>.</column_name>

```sql
ALTER  TABLE orders
  ADD  CONSTRAINT fk_orders_user_id
  FOREIGN KEY (user_id) REFERENCES user_accounts(user_id);
```

## **4\. Use Cases**

### **4.1 File and Directory Names**

- **Common File Names**: Use lower_case_with_underscores.

```
user_controller.py
```

- **Readme .md File Names**: Use uppercase.

```
README.md
```

- **Directory Names**: For root app folders use lower-case-with-hypens (consider include the main language of the app and/or framework).

```
php-my-app
laravel-my-app
dotnet-my-app
```

- **Directory Names .NET**: For root app folders use CamelCase names with a dot (.) to separate libraries and APP subfolders (if necessary).

```
SocialMediaApp
  SocialMediaApp.Api 
  SocialMediaApp.Infraestructure
  SocialMediaApp.Core
```

- **Directory Names**: For subfolders use lower_case_with_underscores.

```
/src/user_management/
```

- **Windows File System Directory Names**: Use CamelCase.

```
C:\Scripts
```

### **4.2 Configuration Files**

- **Configuration File Names**: Use lower_case_with_underscores.

```
database_config.yml
```

## **5\. Specific Use Cases**

### **5.1 API Endpoints**

- **Endpoint URLs**: Use lower-case-with-hyphens.

```
GET /api/v1/user-accounts
```

### **5.2 HTML/CSS/JavaScript**

- **CSS Class Names**: Use lower-case-with-hyphens.

```css
.main-container {
  margin: 0 auto;
}
```

- **JavaScript Variables and Functions**: Follow the same conventions as in the development environment.

```javascript
const userName = "JohnDoe";

function calculateTotalPrice() {
  // ...
}
```

## **6\. Additional Best Practices**

- **Avoid Reserved Words**: Avoid using reserved words as names.

- **Descriptive Names**: Use descriptive names that convey the purpose of the element.

- **Avoid Single Character Names**: Avoid single character names except for loop indices.

- **Use Plural for Collections**: Use plural names for collections (e.g., arrays, lists).

```
user_list = []
```

## **7\. Examples**

### **7.1 Python Example**

```python
MAX_CONNECTIONS = 10
def  calculate_total_price(items):
  total_price = 0
  for item in items:
    total_price += item.price
  return total_price

class  ShoppingCart:
  def  __init__(self):
    self.items = []
    def  add_item(self, item):
    
    self.items.append(item)
```

### **7.2 SQL Example**

```sql
CREATE  TABLE  user_accounts (
  user_id INT  PRIMARY KEY,
  user_name VARCHAR(255)
);

CREATE  INDEX  ix_user_accounts_user_name  ON user_accounts(user_name);

ALTER  TABLE orders
  ADD  CONSTRAINT fk_orders_user_id
  FOREIGN KEY (user_id) REFERENCES user_accounts(user_id);
```

By following this naming convention manual, you can maintain a consistent, clear, and readable codebase that is easy to manage and understand.
