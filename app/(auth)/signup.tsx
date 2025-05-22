import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { Mail, Lock, User } from 'lucide-react-native';

export default function SignupScreen() {
  const { isDarkMode } = useTheme();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup logic
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }
    ]}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/7014932/pexels-photo-7014932.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.headerImage}
        />
        <Text style={[
          styles.title,
          { color: isDarkMode ? '#ffffff' : '#000000' }
        ]}>
          Create Account
        </Text>
        <Text style={[
          styles.subtitle,
          { color: isDarkMode ? '#bbbbbb' : '#666666' }
        ]}>
          Join PostPilot to streamline your social media management
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <User
            size={20}
            color={isDarkMode ? '#bbbbbb' : '#666666'}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
                color: isDarkMode ? '#ffffff' : '#000000'
              }
            ]}
            placeholder="Full Name"
            placeholderTextColor={isDarkMode ? '#888888' : '#999999'}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Mail
            size={20}
            color={isDarkMode ? '#bbbbbb' : '#666666'}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
                color: isDarkMode ? '#ffffff' : '#000000'
              }
            ]}
            placeholder="Email"
            placeholderTextColor={isDarkMode ? '#888888' : '#999999'}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock
            size={20}
            color={isDarkMode ? '#bbbbbb' : '#666666'}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
                color: isDarkMode ? '#ffffff' : '#000000'
              }
            ]}
            placeholder="Password"
            placeholderTextColor={isDarkMode ? '#888888' : '#999999'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={[
            styles.button,
            { opacity: (!fullName || !email || !password) ? 0.5 : 1 }
          ]}
          onPress={handleSignup}
          disabled={!fullName || !email || !password}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={{ color: isDarkMode ? '#bbbbbb' : '#666666' }}>
            Already have an account?
          </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginText}> Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
    zIndex: 1,
  },
  input: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 48,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000000',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  loginText: {
    color: '#000000',
    fontWeight: '600',
  },
});