package randomizer;

public class Sun_Wukong extends godClass{ 
    public Sun_Wukong() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Sun_Wukong test = new Sun_Wukong();
    System.out.println(test.getDamageType());
    }
}
