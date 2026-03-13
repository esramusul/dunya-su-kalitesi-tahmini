import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix

df = pd.read_csv("water_potability.csv")
df["ph"].fillna(value = df["ph"].mean(),inplace=True)
df["Sulfate"].fillna(value = df["Sulfate"].mean(),inplace=True)
df["Trihalomethanes"].fillna(value = df["Trihalomethanes"].mean(),inplace=True)

X = df.drop("Potability",axis = 1).values
y = df["Potability"].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size= 0.3,random_state=42)

model = RandomForestClassifier(random_state=42)
model.fit(X_train,y_train)
y_pred = model.predict(X_test)
cm = confusion_matrix(y_test, y_pred)

plt.figure(figsize=(6, 5))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Not Potable','Potable'],
            yticklabels=['Not Potable','Potable'])
plt.title('Random Forest - Confusion Matrix')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.tight_layout()
plt.savefig('confusion_matrix.png', dpi=300)
print('Saved confusion_matrix.png')
