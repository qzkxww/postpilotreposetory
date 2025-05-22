import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { Mail, Lock } from 'lucide-react-native';

export default function LoginScreen() {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
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
          Welcome Back
        </Text>
        <Text style={[
          styles.subtitle,
          { color: isDarkMode ? '#bbbbbb' : '#666666' }
        ]}>
          Sign in to continue managing your social media presence
        </Text>
      </View>

      <View style={styles.form}>
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

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={[
            styles.forgotPasswordText,
            { color: isDarkMode ? '#bbbbbb' : '#666666' }
          ]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.button,
            { opacity: (!email || !password) ? 0.5 : 1 }
          ]}
          onPress={handleLogin}
          disabled={!email || !password}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={{ color: isDarkMode ? '#bbbbbb' : '#666666' }}>
            Don't have an account?
          </Text>
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.signupText}> Sign Up</Text>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    color: '#000000',
    fontWeight: '600',
  },
});